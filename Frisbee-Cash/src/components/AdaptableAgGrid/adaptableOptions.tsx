import {
  PredefinedConfig,
  AdaptableOptions,
} from "@adaptabletools/adaptable-react-aggrid";
import { WebFramework } from "./rowData";

// use a common Team Sharing state key for both users
const TEAM_SHARING_STATE_KEY = "BasicTeamSharingDemo_TeamSharingState";
export const getAdaptableOptionsForUser = (
  userName: "Alice" | "Bob",
  updateCurrentUser: (userName: "Alice" | "Bob") => void
): AdaptableOptions<WebFramework> => {
  const commonPredefinedConfig: PredefinedConfig = {
    Dashboard: {
      Revision: Date.now(),
      Tabs: [
        {
          Name: "Select Current User",
          Toolbars: ["CurrentUser"],
        },
      ],
      ModuleButtons: ["FormatColumn", "TeamSharing", "SettingsPanel"],
    },
    Layout: {
      CurrentLayout: "Standard Layout",
      Layouts: [
        {
          Columns: [
            "name",
            "github_stars",
            "license",
            "github_watchers",
            "language",
            "open_issues_count",
            "closed_issues_count",
            "created_at",
            "has_wiki",
            "updated_at",
            "pushed_at",
            "description",
            "open_pr_count",
            "closed_pr_count",
            "has_projects",
            "has_pages",
            "week_issue_change",
          ],
          Name: "Standard Layout",
        },
      ],
    },
  };
  const userSpecificPredefinedConfig =
    userName === "Alice"
      ? {
          FormatColumn: {
            FormatColumns: [
              {
                Scope: {
                  ColumnIds: ["name"],
                },
                Style: {
                  BackColor: "lightblue",
                  ForeColor: "brown",
                },
              },
            ],
          },
          Theme: {
            CurrentTheme: "light",
          },
        }
      : // Bob
        {
          FormatColumn: {
            FormatColumns: [
              {
                Scope: {
                  ColumnIds: ["language"],
                },
                Style: {
                  BackColor: "yellow",
                  ForeColor: "black",
                },
              },
            ],
          },
          Theme: {
            CurrentTheme: "dark",
          },
        };

  return {
    primaryKey: "id",
    adaptableId: "Basic Team Sharing Demo",
    adaptableStateKey: `BasicTeamSharingDemo_${userName}`,
    userName,
    predefinedConfig: {
      ...commonPredefinedConfig,
      ...userSpecificPredefinedConfig,
    },
    teamSharingOptions: {
      enableTeamSharing: true,
      loadSharedEntities: async () => {
        const data = localStorage.getItem(TEAM_SHARING_STATE_KEY);
        if (!data) {
          return [];
        }

        try {
          return JSON.parse(data);
        } catch (e) {
          return [];
        }
      },
      persistSharedEntities: (entries) => {
        localStorage.setItem(TEAM_SHARING_STATE_KEY, JSON.stringify(entries));
        return Promise.resolve();
      },
    },
    dashboardOptions: {
      customToolbars: [
        {
          name: "CurrentUser",
          title: "Current User",
          toolbarButtons: [
            {
              label: "Alice",
              buttonStyle: () => {
                return {
                  tone: userName === "Alice" ? "success" : "neutral",
                  variant: userName === "Alice" ? "raised" : "outlined",
                };
              },
              onClick: () => {
                updateCurrentUser("Alice");
              },
            },
            {
              label: "Bob",
              buttonStyle: () => {
                return {
                  tone: userName === "Bob" ? "success" : "neutral",
                  variant: userName === "Bob" ? "raised" : "outlined",
                };
              },
              onClick: () => {
                updateCurrentUser("Bob");
              },
            },
          ],
        },
      ],
      customDashboardButtons: [
        {
          tooltip: "Reset state",
          icon: {
            name: "refresh",
          },
          buttonStyle: {
            tone: "error",
          },
          onClick: (button, context) => {
            localStorage.removeItem(TEAM_SHARING_STATE_KEY);
            ["Alice", "Bob"].forEach((user) => {
              localStorage.removeItem(`BasicTeamSharingDemo_${user}`);
            });
            context.adaptableApi.configApi.reloadPredefinedConfig();
          },
        },
      ],
    },
  };
};
