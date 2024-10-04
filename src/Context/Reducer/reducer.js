export const initialState = { imageOpen: [], nextPage: null, detailImage: {} };

export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_OPENDATA": // contiene las imagenes obtenidas de la API
            return { ...state, imageOpen: action.payload };
        case "NEXT_PAGE_OPENDATA": // contiene el link de paginación
            return { ...state, nextPage: action.payload };
        case "GET_LOADINGMORE_OPENDATA": // agrega las nuevas imagenes obtenidas de nextPage
            // Filtrar las nuevas imágenes que no están ya en state.imageOpen
            const noRepit = action.payload.filter((newImage) =>
                !state.imageOpen.some((existingImage) =>
                    existingImage.archiveId === newImage.archiveId)
            );
            return { ...state, imageOpen: [...state.imageOpen, ...noRepit] };
        case "GET_DETAILIMAGE":
            return { ...state, detailImage: action.payload };
        default:
            throw new Error("Error in Reducer");
    }
};