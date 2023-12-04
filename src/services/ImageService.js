class ImageService {

    getImagePath(imageSrc) {
        // TODO: get url from backend properties
        return imageSrc ? 'http://localhost:8080/image/' + imageSrc : 'http://localhost:8080/image/NotFound.png';
    }
}
export default new ImageService();