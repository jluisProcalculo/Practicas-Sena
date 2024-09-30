import axios from "axios";
import apiKey from "../../middleware/config.json";

export const skyfiPlatformApiArchives = async (dispatch) => {
    let headers = {
        "X-Skyfi-Api-Key": apiKey.apiKey
    };
    let request = {
        aoi: "POLYGON((-74.085345 4.665101, -74.014805 4.665101, -74.014805 4.616726, -74.085345 4.616726, -74.085345 4.665101))",
        fromDate: "2024-01-01T00:00:00",
        toDate: "2024-09-26T00:00:00",
        max_cloud_coverage_percent: 20,
        max_off_nadir_angle: 4,
        resolutions: ["LOW"],
        productTypes: ["MULTISPECTRAL"],
        providers: ["SENTINEL2_CREODIAS"],
        openData: "true",
        minOverlapRatio: "0.5",
        page_size: 10,
    };
    let archives_response = await axios.post(
        "/platform-api/archives",
        request,
        { headers: headers }
    );
    let archives = archives_response.data;
    dispatch({ type: "GET_OPENDATA", payload: archives.archives });
};