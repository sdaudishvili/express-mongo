const copyToClipboard = (input) => {
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand('copy');
};

export default copyToClipboard;
