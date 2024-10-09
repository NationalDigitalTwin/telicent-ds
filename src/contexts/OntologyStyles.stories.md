import { Meta, Source } from "@storybook/blocks";

<Meta title="Design System/Ontology styles" />

# Ontology styles

We want Design System components to fetch backend styles the same way as the
hosting app. This is achieved by exposing the `ontologyService` prop to the
`DSProviders` component. This allows styles from the ontology to be fetched.
Refer to the [js-ontology-lib](https://github.com/telicent-oss/js-ontology-lib)
for instructions on how to install the package.

### Usage

#### Options

- `service: OntologyService`:
  - Optional
  - the OntologyService instance to provide

<Source
  dark
  code={`
import { DSProviders } from "@telicent-oss/ds";

const ontologyService = new OntologyService("http://localhost:3030/", "ontology");

const App = () => (

<DSProviders ontologyService={ontologyService}>
  <TeliTypeIcon type="http://ies.data.gov.uk/ontology/ies4#GalaxySector" />
</DSProviders>
) `} />

### useOntologyStyles

The `useOntologyStyles` hook returns the ontology styles and provides function
to find a particular icon style.

> Note to use this hook, you must use the DSProviders component and provide the
> ontology service

<Source
  dark
  code={`

import { useOntologyStyles } from "@telicent-oss/ds";

const {
styles,
findIcon
} = useOntologyStyles();
`} />

#### Returns

- `styles: IconStyle[]`
- `findIcon: (classUri: string) => IconStyle`

### Types Reference

#### IconStyle

```
export type IconStyle = {
  classUri: string;
  backgroundColor: string;
  color: string;
  iconFallbackText: string;
  alt: string;
} & Partial<{
  faIcon: string;
  faUnicode: string;
  shape: string;
}>;
```

#### Fields

- `classUri`: string
  - Unique identifier.
- `backgroundColor`: string
  - Hexcode colour values for background color.
- `color`: string
  - Hexcode colour values for color.
- `iconFallbackText`: string
  - Fallback text for a class (e.g. OSI - Open Streetmap Identifier).
- `alt`: string
  - Alternative text for icon. Should be used to improve accessibility (e.g.
    OpenStreetmapIdentifier).
- `faIcon?`: string
  - Font awesome icon class (e.g. fa-regular fa-bolt-lightning).
- `faUnicode?`: string
  - Font awesome icon unicode. Can be used as an alternative to faIcon.
- `shape?`: string
  - Class shape.
