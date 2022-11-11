import { capitalize } from "vue";

const letterCapitalize = () => {
  function capitalized(text) {
    const dummy = text.split("-");

    dummy.forEach((item, index) => {
      dummy[index] = capitalize(item);
    });

    return dummy.join(" ");
  }

  return {
    capitalized,
  };
};

export default letterCapitalize;
