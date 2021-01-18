import React, { useReducer, createContext } from "react";

export const GraduateContext = createContext();

const initialState = {
  graduates: [],
  graduate: {}, //selected or new graduate
  message: {}, //logging error messages from server
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_GRADUATE": {
      return {
        ...state,
        graduates: [...state.graduates, action.payload],
        message: {
          type: "success",
          title: "Success",
          content: "Your profile is created!",
        },
      };
    }
    case "FLASH_MESSAGE": {
      return {
        ...state,
        message: action.payload,
      };
    }
    case "FETCH_GRADUATES": {
      return {
        ...state,
        graduates: action.payload,
      };
    }
    case "FETCH_GRADUATE": {
      return {
        ...state,
        graduate: action.payload,
      };
    }
    case "UPDATE_GRADUATE": {
      const graduate = action.payload;
      return {
        ...state,
        graduates: state.graduates.map((item) =>
          item._id === graduate._id ? graduate : item,
        ),
        message: {
          type: "success",
          title: "Update Successful",
          content: `Graduate "${graduate._id}" has been updated!`,
        },
      };
    }
    case "DELETE_GRADUATE": {
      const { _id } = action.payload;
      return {
        ...state,
        graduates: state.graduates.filter((item) => item._id !== _id),
        message: {
          type: "success",
          title: "Delete Successful",
          content: `Graduate has been deleted!`,
        },
      };
    }
    case "SEARCH_GRADUATES": {
      const { location, language, checkBoxState } = action.payload;
      const filteredGraduates = state.graduates
        .filter((loc) =>
          loc.current_location.toLowerCase().includes(location.toLowerCase()),
        )
        .filter((lang) =>
          lang.languages
            .join(" ")
            .toLowerCase()
            .includes(language.toLowerCase()),
        )
        .filter((item) =>
          !!checkBoxState.full_time ? item.full_time === true : true,
        )
        .filter((item) =>
          !!checkBoxState.part_time ? item.part_time === true : true,
        )
        .filter((item) =>
          !!checkBoxState.willing_relocate
            ? item.willing_relocate === true
            : true,
        )
        .filter((item) =>
          !!checkBoxState.willing_remote ? item.willing_remote === true : true,
        )
        .filter((item) =>
          !!checkBoxState.internship ? item.internship === true : true,
        )
        .filter((item) =>
          !!checkBoxState.contract ? item.contract === true : true,
        );
      return {
        ...state,
        filteredGraduates,
      };
    }
    //   default:
    //     return state;
    // }
    default:
      throw new Error();
  }
}

export const GraduateContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <GraduateContext.Provider value={[state, dispatch]}>
      {children}
    </GraduateContext.Provider>
  );
};
