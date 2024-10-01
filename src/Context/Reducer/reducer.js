export const initialState = { imageOpen: [], nextPage: null };

export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_OPENDATA":
            return { ...state, imageOpen: action.payload };
        case "NEXT_PAGE_OPENDATA":
            return { ...state, nextPage: action.payload };
        case "GET_LOADINGMORE_OPENDATA":
            // Filtrar las nuevas imágenes que no están ya en state.imageOpen
            const noRepit = action.payload.filter(
                (newImage) => !state.imageOpen.some((existingImage) => existingImage.archiveId === newImage.archiveId)
            );
            return { ...state, imageOpen: [...state.imageOpen, ...noRepit] };
        default:
            throw new Error("Error in Reducer");
    }
};