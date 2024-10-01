export const initialState = { imageOpen: [], nextPage: null };

export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_OPENDATA":
            return { ...state, imageOpen: action.payload };
        case "NEXT_PAGE_OPENDATA":
            return { ...state, nextPage: action.payload };
        case "GET_LOADINGMORE_OPENDATA":
            return { ...state, imageOpen: [...state.imageOpen, ...action.payload] };
    }
};