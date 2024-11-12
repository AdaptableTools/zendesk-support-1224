import { AdaptableOptions } from "@adaptabletools/adaptable-react-aggrid";
import { ADAPTABLE_LICENSE_KEY } from "../../../../main";

import { useMemo } from "react";

const useGetAdaptableCommonOptions = (primaryKey: string) => {
  const adaptableOptions: AdaptableOptions = useMemo(
    () => ({
      licenseKey: ADAPTABLE_LICENSE_KEY,
      userName: "test_user",
      primaryKey: primaryKey,
      currentUser: "test_user",
      autogeneratePrimaryKey: primaryKey === "",
    }),
    [primaryKey]
  );

  return adaptableOptions;
};

export default useGetAdaptableCommonOptions;
