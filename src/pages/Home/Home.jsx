import React from "react";
import MenuTab from "../../components/MenuTab/MenuTab";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Home = () => {
  return (
    <div className="px-4 py-2 bg-backgroundGray">
      <div className="text-3xl font-bold py-2">
        👋 Welcome to Islamabad Open Debating Championship 2024
      </div>
      <div className="border rounded-md">
        <MenuTab text="Team Tab" icon={<GroupOutlinedIcon />} />
        <MenuTab text="Speaker Tab" icon={<PersonOutlineOutlinedIcon />} />
        <MenuTab text="Open Speaker Tab" icon={<PersonOutlineOutlinedIcon />} />
        <MenuTab
          text="Schools Speaker Tab"
          icon={<PersonOutlineOutlinedIcon />}
        />
        <MenuTab text="Results" icon={<ShowChartOutlinedIcon />} />

        <MenuTab text="Diversity" icon={<LanguageOutlinedIcon />} />
        <MenuTab text="Participants" icon={<GroupOutlinedIcon />} />
        <MenuTab text="Draw for Round 1" icon={<VisibilityOutlinedIcon />} />
        <MenuTab text="Draw for Round 2" icon={<VisibilityOutlinedIcon />} />
        <MenuTab text="Draw for Round 3" icon={<VisibilityOutlinedIcon />} />
        <MenuTab text="Draw for Round 4" icon={<VisibilityOutlinedIcon />} />
        <MenuTab
          text="Draw for Open Semifinals"
          icon={<VisibilityOutlinedIcon />}
        />
        <MenuTab
          text="Draw for School Grand Final"
          icon={<VisibilityOutlinedIcon />}
        />
      </div>
      <div className=" my-2 border rounded-md">
        <div className="border p-2 font-bold text-sm">TOURNAMENT STAFF</div>
        <div className="bg-white p-2 text-sm">
          <div>Tabulation: Salar Ali Bangash, Ali Tahir</div>
          <div>Equity: [list equity members here]</div>
          <div>
            Organization: Lahore Grammar School International Degree Programs
            (LGS IDP, Islamabad)
          </div>
          <div>Motions Committee: Anum Naseer, Taha Iqbal, Tawfique Elahi</div>
          <div>
            Adjudication: Ali Tahir, Amnah Ejaz, Salar Ali Bangash, Shahan Khan,
            Sulieman Afzal, Taha Masud
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
