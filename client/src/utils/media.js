export const videoUrlByIdAndService = ({ id, service }) => {
  if (!service) return '';
  if (service === 'youtube') return `https://www.youtube.com/watch?v=${id}`;
  if (service === 'vimeo') return `https://player.vimeo.com/video/${id}`;
  if (service === 'local' || service === 'facebook') return id;

  return '';
};

export const generateIframeHtmlTemplate = (video, videoImage, videoTitle) => {
  const dataPoster = videoImage ? `data-poster="${process.env.STATIC_RESOURCES_URL.concat('/', videoImage.path)}"` : '';
  const dataTitle = videoTitle ? `data-title="${videoTitle}"` : '';

  switch (video.service) {
    case 'youtube':
      return `<iframe  class="video-iframe" ${dataPoster} ${dataTitle} data-videoService="${video.service}" data-videoId=${video.id} width="560" height="315" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />`;
    case 'vimeo':
      return `<iframe  class="video-iframe" ${dataPoster} ${dataTitle} data-videoService="${video.service}" data-videoId=${video.id} src="https://player.vimeo.com/video/${video.id}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen />`;
    default:
      return `<iframe  class="video-iframe" ${dataPoster} ${dataTitle} data-videoService="${video.service}" data-videoId=${video.id} src="${video.id}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen />`;
  }
};
