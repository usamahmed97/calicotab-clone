import React from "react";
import NavbarItem from "../ NavbarItem/NavbarItem";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HelpIcon from "@mui/icons-material/Help";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Footer = () => {
  return (
    <div className="border-t p-4">
      <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="text-[10px] flex flex-col gap-2">
          <div className="font-bold">
            THIS SITE RUNS ON TABBYCAT 2.9.0-C (RAGDOLL - CALICO)
          </div>
          <div className="text-gray-500">
            Tabbycat is an open-source project developed by volunteers and is
            free to use. Donations to Tabbycat from individuals or organisations
            are much appreciated and help us to continue to develop, support,
            and maintain Tabbycat.
          </div>
        </div>
        <div className="grid xs:grid-cols-1 lg:grid-cols-2">
          <div className="text-[10px] flex flex-col gap-2">
            <div className="font-bold">
              STILL TIMING DEBATES WITH THE STOPWATCH APP?
            </div>
            <div className="text-gray-500">
              Using an app designed for debate timekeeping makes speaking and
              adjudicating easier! Check out Timekept (iPhone/iPad) or
              Debatekeeper (Android).
            </div>
          </div>
          <div className="text-[10px] flex flex-col gap-2">
            <div className="font-bold">OUR ORGANISATION</div>
            <div className="text-gray-500">
              Tabbycat is supported by the Tabbycat Debate Association, a
              non-profit for advancing open debate technology.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-10 text-xs text-gray-500 p-5">
        <NavbarItem
          name="Language"
          link="https://www.google.com"
          icon={<LanguageOutlinedIcon />}
        />
        <NavbarItem
          name="Github"
          link="https://www.google.com"
          icon={<GitHubIcon />}
        />
        <NavbarItem
          name="Documentation"
          link="https://www.google.com"
          icon={<LibraryBooksIcon />}
        />
        <NavbarItem
          name="Support"
          link="https://www.google.com"
          icon={<HelpIcon />}
        />
        <NavbarItem
          name="Facebook"
          link="https://www.google.com"
          icon={<FacebookIcon />}
        />
        <NavbarItem
          name="Set Up A Copy"
          link="https://www.google.com"
          icon={<CloudUploadIcon />}
        />
        <NavbarItem
          name="Site Policies"
          link="https://www.google.com"
          icon={<BusinessCenterIcon />}
        />
      </div>
    </div>
  );
};

export default Footer;
