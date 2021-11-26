/*global kakao*/

const geocoder = new kakao.maps.services.Geocoder();
const placesSearchCB = (result, status) => {
  if (status === kakao.maps.services.Status.OK) {
    console.log(result);
  }
};
export const searchAddress = (event) => {
  const address = event.target.value;
  geocoder.addressSearch(address, placesSearchCB);
};
