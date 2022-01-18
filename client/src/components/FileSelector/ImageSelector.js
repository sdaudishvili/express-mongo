import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import { Dropzone } from '@/components';
import CropperJS from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { cropImage } from '@/api/uploadProvider';
import { makeStyles } from '@material-ui/styles';
import { staticUrl } from '@/api/host';

const useStyles = makeStyles(() => ({
  image: {
    width: '30%'
  },
  cropper: {
    width: '50%'
  }
}));

const ImageSelector = (props) => {
  const { className, onSelect, value, title, aspectRatio } = props;
  const [src, setSrc] = React.useState(null);
  const classes = useStyles();

  const cropperRef = React.useRef(null);

  const onCrop = async () => {
    const { cropper } = cropperRef.current;
    const cropData = cropper.getData();
    const fd = new FormData();
    fd.append('Image', src.file);
    fd.append('X', Math.round(cropData.x));
    fd.append('Y', Math.round(cropData.y));
    fd.append('Width', Math.round(cropData.width));
    fd.append('Height', Math.round(cropData.height));
    try {
      const res = await cropImage(fd);
      const { name } = res;
      if (name) {
        setSrc(null);
        onSelect(name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className={className}>
      {title && <CardHeader title={title} />}
      <CardContent>
        {value ? (
          <img className={classes.image} src={staticUrl.concat(value)} alt="" />
        ) : (
          <>
            <Dropzone onSelect={setSrc} />
            {src && (
              <div className={classes.cropper}>
                <CropperJS
                  ref={cropperRef}
                  src={src.image}
                  style={{ height: 300, width: '100%' }}
                  aspectRatio={aspectRatio}
                  scalable
                  zoomable={false}
                  viewMode={2}
                  ready={() => {
                    const { cropper } = cropperRef.current;
                    const contData = cropper.getContainerData();
                    cropper.setCropBoxData({
                      height: contData.height,
                      width: contData.width
                    });
                  }}
                />
              </div>
            )}
          </>
        )}
        <CardActions>
          {src && (
            <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }} onClick={onCrop}>
              Crop
            </Button>
          )}
          {value && (
            <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }} onClick={() => onSelect('')}>
              Remove
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

ImageSelector.propTypes = {
  className: PropTypes.string,
  aspectRatio: PropTypes.number,
  value: PropTypes.string,
  onSelect: PropTypes.func,
  title: PropTypes.string
};

ImageSelector.defaultProps = {
  className: '',
  aspectRatio: undefined,
  value: '',
  title: '',
  onSelect: () => {}
};

export default ImageSelector;
