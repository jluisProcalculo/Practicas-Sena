export const initialState = { imageOpen: [] };

export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_OPENDATA":
            return { ...state, imageOpen: action.payload };
    }
};