import ImagePicker from 'react-native-image-picker'
function showImagePicker () {
  console.log('its open')
  const options = {
    title: 'Seleccione una Imagen',
    cancelButtonTitle: 'Cancelar',
    takePhotoButtonTitle: 'Tomar Foto',
    chooseFromLibraryButtonTitle: 'Seleccionar desde la galería',
    mediaType: 'photo'
  }
  const promesa = new Promise((rs, rj) => {
    ImagePicker.showImagePicker(options, response => {
      if (response.data) {
        const objectImg = {
          uri: `data:image/jpeg;base64,${response.data}`,
          name: response.fileName
        }
        rs(objectImg)
      }
      else if (response.didCancel) {
        rj(false)
      }
      else if (response.error) {
        rj(response.error)
      }
    })
  })
  return promesa
}

export default showImagePicker