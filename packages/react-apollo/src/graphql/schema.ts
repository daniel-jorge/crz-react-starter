/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Continents
// ====================================================

export interface Continents_continents_countries {
  __typename: "Country";
  code: string | null;
  name: string | null;
}

export interface Continents_continents {
  __typename: "Continent";
  code: string | null;
  name: string | null;
  countries: (Continents_continents_countries | null)[] | null;
}

export interface Continents {
  continents: (Continents_continents | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
