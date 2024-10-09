/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, {useState} from "react";
import hierarchy from "./data/hierarchy";
import OntologyHierarchy from "./OntologyHierarchy";

const OntologyHierarchyDisplay = (inputs: { instanceId: string }) => {
  const {instanceId} = inputs;
  // Element is the root of everything
  // entire dataset must be passed in.

    const [data, setData] = useState<string>();

    const handleDrag = (event: React.DragEvent, nodeId: string) => {
        setData(nodeId);
    };

  return (
    <div className="cMenuDiv relative flex grow flex-col bg-black-100">
      <OntologyHierarchy
        instanceId={instanceId}
        data={hierarchy}
        descendantCount={false}
        dragEvent={handleDrag}
        isDraggable={true}
        filterIds={[
            "http://ies.data.gov.uk/ontology/ies4#RealEstate",
            "http://ies.data.gov.uk/ontology/ies4#PersonState",
            "http://ies.data.gov.uk/ontology/ies4#ParticularPeriod",
        ]}
        expandAll={true}
        expandElement={false}
      />
    </div>
  );
};
export default OntologyHierarchyDisplay;
