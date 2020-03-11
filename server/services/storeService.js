const uploadAvatar = (files) => {
  return new Promise((resolve, reject) => {
    if (!files)
      return reject({ ok: false, message: 'No file uploaded' });
    else {
      //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      let avatar = files.avatar;
      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      avatar.mv('./uploads/' + avatar.name);
      return resolve({
        ok: true,
        message: 'File uploaded',
        data: {
          name: avatar.name,
          mimetype: avatar.mimetype,
          size: avatar.size
        }
      });
    }
  });
}

module.exports = {
  uploadAvatar
}