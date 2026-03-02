interface Props {
  name: string;
  age: string;
  isMarried: boolean;
  country: Countries;
}

export enum Countries {
  USA = "United States of America",
  CANADA = "Canada",
  MEXICO = "Mexico",
  BRAZIL = "Brazil",
  UK = "United Kingdom",
  FRANCE = "France",
}

// Note: If you pass a props, without being explicit, it will be of type "any", which is not recommended in TypeScript.
export const EnumComponent = (props: Props) => {
  return (
    <div>
      <h2> Usage of Enums </h2>
      <p> Name {props.name}</p>
      <p> Age {props.age}</p>
      <p> Status: {props.isMarried ? "Married" : "Single"}</p>
      <p> Country Origin: {props.country} </p>
    </div>
  );
};
