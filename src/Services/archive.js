import axios from "axios";
import apiKey from "../../middleware/config.json";

export const skyfiPlatformApiArchives = async (dispatch, filterOpen) => {
    try {
        let headers = { "X-Skyfi-Api-Key": apiKey.apiKey };
        let request = {
            aoi: "POLYGON((-97.759918 30.248653, -97.723191 30.248653, -97.723191 30.27879, -97.759918 30.27879, -97.759918 30.248653))",
            fromDate: "2024-01-01T00:00:00",
            toDate: "2024-09-26T00:00:00",
            max_cloud_coverage_percent: 20,
            max_off_nadir_angle: 4,
            resolutions: filterOpen.resolutions,
            productTypes: filterOpen.productTypes,
            providers: filterOpen.providers,
            openData: filterOpen.openData,
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
        dispatch({ type: "NEXT_PAGE_OPENDATA", payload: archives.nextPage });
    } catch (error) {
        console.log("Error in skyfiPlatformApiArchives, " + error);
    }
};

export const continueCatalogArchives = async (nextPage, dispatch) => {
    try {
        let headers = { "X-Skyfi-Api-Key": apiKey.apiKey };
        let archives_response = await axios.get(nextPage, { headers: headers });
        let archives = archives_response.data;
        dispatch({ type: "GET_LOADINGMORE_OPENDATA", payload: archives.archives });
        dispatch({ type: "NEXT_PAGE_OPENDATA", payload: archives.nextPage });
    } catch (error) {
        console.log("Error in continueCatalogArchives, " + error);
    }
};

export const skyfiPlatformApiGetArchive = async (id, dispatch) => {
    try {
        let headers = { "X-Skyfi-Api-Key": apiKey.apiKey }
        let archive_response = await axios.get(
            `/platform-api/archives/${id}`,
            { headers: headers }
        );
        let archive = archive_response.data;
        dispatch({ type: "GET_DETAILIMAGE", payload: archive });
    } catch (error) {
        console.log("Error in skyfiPlatformApiGetArchive, " + error);
    }
};