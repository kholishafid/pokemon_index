import { capitalize } from "vue";

const capitalizedL = () => {
  function cases(text) {
    let dummy = text.split("-");
    dummy[0] = capitalize(dummy[0]);
    dummy[1] = dummy[1].toUpperCase();

    return dummy.join(" ");
  }

  return {
    cases,
  };
};

export default capitalizedL;
