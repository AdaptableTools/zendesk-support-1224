import * as React from "react";
import { useState } from "react";
import {
  Adaptable,
  AdaptableApi,
  AdaptableReadyInfo,
} from "@adaptabletools/adaptable-react-aggrid";

import { getAdaptableOptionsForUser } from "./adaptableOptions";
import { columnDefs } from "./columnDefs";
import { rowData, WebFramework } from "./rowData";
import { GridOptions } from "@ag-grid-community/core";
import { agGridModules } from "../../utils/grid/aggridconfig/agGridModules";

const gridOptions: GridOptions<WebFramework> = {
  defaultColDef: {
    resizable: true,
    sortable: true,
    editable: true,
    filter: true,
    floatingFilter: true,
  },
  columnDefs: columnDefs,
  rowData: rowData,
  sideBar: true,
  suppressMenuHide: true,
  columnMenu: "new",
  cellSelection: true,
  statusBar: {
    statusPanels: [
      { statusPanel: "agTotalRowCountComponent", align: "left" },
      { statusPanel: "agFilteredRowCountComponent" },
      {
        key: "Center Panel",
        statusPanel: "AdaptableStatusPanel",
        align: "center",
      },
    ],
  },
};

const Grid = ({
  currentUser,
  onCurrentUserChange,
}: {
  currentUser: "Alice" | "Bob";
  onCurrentUserChange: (userName: "Alice" | "Bob") => void;
}) => {
  const adaptableApiRef = React.useRef<AdaptableApi>();

  const adaptableOptions = getAdaptableOptionsForUser(
    currentUser,
    onCurrentUserChange
  );

  const agGridOptions = { ...gridOptions };
  return (
    <div style={{ display: "flex", flexFlow: "column", height: "100vh" }}>
      <Adaptable.Provider
        gridOptions={agGridOptions}
        adaptableOptions={adaptableOptions}
        modules={[...agGridModules]}
        onAdaptableReady={(adaptableReadyInfo: AdaptableReadyInfo) => {
          // save a reference to adaptable api
          adaptableApiRef.current = adaptableReadyInfo.adaptableApi;
        }}
      >
        <Adaptable.UI key={`${currentUser}-ui`} style={{ flex: "none" }} />
        <Adaptable.AgGridReact className="ag-theme-balham" />
      </Adaptable.Provider>
    </div>
  );
};

const TeamSharingGrid: React.FunctionComponent = () => {
  const [currentUser, setCurrentUser] = useState<"Alice" | "Bob">("Alice");

  return (
    <Grid
      key={currentUser}
      currentUser={currentUser}
      onCurrentUserChange={(userName) => setCurrentUser(userName)}
    />
  );
};
export default TeamSharingGrid;
