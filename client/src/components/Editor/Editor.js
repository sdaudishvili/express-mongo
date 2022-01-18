/* eslint-disable no-useless-escape */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Editor as TinyMCE } from '@tinymce/tinymce-react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {},
  editorContainer: {
    height: 400,
    '& .tox-tinymce': {
      height: '100% !important',
      borderRadius: 4
    }
  },
  small: {
    height: 220
  }
}));

const Editor = (props) => {
  const { className, initialValue, small, onChange } = props;

  const classes = useStyles();

  const editorEl = useRef(null);

  const handleOnEditorChange = (content) => {
    onChange(content);
  };

  return (
    <div className={clsx(classes.root, className)}>
      <div className={clsx(classes.editorContainer, { [classes.small]: small })}>
        <TinyMCE
          apiKey={process.env.TINYMC_API_KEY}
          value={initialValue}
          plugins="print preview table lists link textcolor paste advlist footnotes code image"
          toolbar="undo redo | formatselect | bold italic backcolor forecolor blockquote | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | | link | removeformat | | code | superscript subscript"
          ref={editorEl}
          init={{
            block_formats: 'Paragraph=p;Heading 3=h3;Heading 4=h4;Heading 5=h5',
            menubar: false
          }}
          onEditorChange={handleOnEditorChange}
        />
      </div>
    </div>
  );
};

Editor.propTypes = {
  className: PropTypes.string,
  initialValue: PropTypes.string,
  small: PropTypes.bool,
  onChange: PropTypes.func
};

Editor.defaultProps = {
  className: '',
  initialValue: '',
  small: false,
  onChange: () => {}
};

export default Editor;
