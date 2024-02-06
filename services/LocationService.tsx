
import * as Location from 'expo-location';

export const SetLocationPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    return status;
};

export const GetUserCountryLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    let reverseGeocode = await Location.reverseGeocodeAsync(location.coords);
    console.log(reverseGeocode);
    
    if (reverseGeocode && reverseGeocode.length > 0) {
        return reverseGeocode[0].country;
    } else {
        console.error('Unable to get address information');
        return "";
    }
};

