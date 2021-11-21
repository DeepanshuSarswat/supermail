import React, { useState, useEffect } from "react";

import "./SuperMailListData.css";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import DraftsIcon from "@mui/icons-material/Drafts";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { db } from "../../firebse/firebase";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SelectMail } from "../../../features/counter/mailSlice";

const useStyles = makeStyles((theme) => ({
  typePrimaryColor: {
    width: "400px",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  GmailSubject: {
    flex: "0.3",
  },
}));
const mailDataSuper = [
  {
    subject: "Are You A DIY Investor?",
    title: "MoneyWorks4me",
    desc: `Dear sarswatdeepanshu,
    Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.  `,
    time: "Nov 11",
    sender: "besafe@moneyworks4me.com",
  },
  {
    subject: "Your career looks 👌",
    title: "Internshala Trainings",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 14",
    sender: "trainings@internshala.com",
  },

  {
    subject: "Write Better Hooks in MINUTES",
    title: "Lurn Daily",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 14",
    sender: "daily@lurn.com via creatensend.com ",
  },

  {
    subject: "Deepanshu: 30+ new jobs in Worldwide",
    title: "LinkedIn Job Alerts",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 14",
    sender: "noreply@linkedin.com",
  },
  {
    subject: "Why are NITians crazy about PSU jobs?",
    title: "Quora Digest",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 15",
    sender: "english-digest-noreply@quora.com",
  },
  {
    subject: "Grab your rewards on Cloud DevJam",
    title: "On behalf of Google Cloud ",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "10 Nov",
    sender: "user@techgig.com",
  },
  {
    subject: "Are You A DIY Investor?",
    title: "MoneyWorks4me",
    desc: `Dear sarswatdeepanshu,
    Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.  `,
    time: "Nov 11",
    sender: "besafe@moneyworks4me.com",
  },
  {
    subject: "Your career looks 👌",
    title: "Internshala Trainings",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 14",
    sender: "trainings@internshala.com",
  },

  {
    subject: "Write Better Hooks in MINUTES",
    title: "Lurn Daily",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 14",
    sender: "daily@lurn.com via creatensend.com ",
  },

  {
    subject: "Deepanshu: 30+ new jobs in Worldwide",
    title: "LinkedIn Job Alerts",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 14",
    sender: "noreply@linkedin.com",
  },
  {
    subject: "Why are NITians crazy about PSU jobs?",
    title: "Quora Digest",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 15",
    sender: "english-digest-noreply@quora.com",
  },
  {
    subject: "Grab your rewards on Cloud DevJam",
    title: "On behalf of Google Cloud ",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "10 Nov",
    sender: "user@techgig.com",
  },
  {
    subject: "Are You A DIY Investor?",
    title: "MoneyWorks4me",
    desc: `Dear sarswatdeepanshu,
    Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.  `,
    time: "Nov 11",
    sender: "besafe@moneyworks4me.com",
  },
  {
    subject: "Your career looks 👌",
    title: "Internshala Trainings",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 14",
    sender: "trainings@internshala.com",
  },

  {
    subject: "Write Better Hooks in MINUTES",
    title: "Lurn Daily",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 14",
    sender: "daily@lurn.com via creatensend.com ",
  },

  {
    subject: "Deepanshu: 30+ new jobs in Worldwide",
    title: "LinkedIn Job Alerts",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 14",
    sender: "noreply@linkedin.com",
  },
  {
    subject: "Why are NITians crazy about PSU jobs?",
    title: "Quora Digest",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 15",
    sender: "english-digest-noreply@quora.com",
  },
  {
    subject: "Grab your rewards on Cloud DevJam",
    title: "On behalf of Google Cloud ",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "10 Nov",
    sender: "user@techgig.com",
  },
  {
    subject: "Are You A DIY Investor?",
    title: "MoneyWorks4me",
    desc: `Dear sarswatdeepanshu,
    Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.Greetings from MoneyWorks4me.com (SEBI Registered: INA000013323)
    Managing your investments on your own is quite easy today. All you need is the mindset of a Do-it-Yourself (DIY) Investor, some guidance, and some high-quality research that is easy to use.
    But first, let’s check if you have what it takes to be a successful DIY Investor.  `,
    time: "Nov 11",
    sender: "besafe@moneyworks4me.com",
  },
  {
    subject: "Your career looks 👌",
    title: "Internshala Trainings",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 14",
    sender: "trainings@internshala.com",
  },

  {
    subject: "Write Better Hooks in MINUTES",
    title: "Lurn Daily",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 14",
    sender: "daily@lurn.com via creatensend.com ",
  },

  {
    subject: "Deepanshu: 30+ new jobs in Worldwide",
    title: "LinkedIn Job Alerts",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 14",
    sender: "noreply@linkedin.com",
  },
  {
    subject: "Why are NITians crazy about PSU jobs?",
    title: "Quora Digest",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "Nov 15",
    sender: "english-digest-noreply@quora.com",
  },
  {
    subject: "Grab your rewards on Cloud DevJam",
    title: "On behalf of Google Cloud ",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "10 Nov",
    sender: "user@techgig.com",
  },
];
function SuperMailListData({ id, username, to, timestamp, content, subject }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      SelectMail({
        id,
        username,
        to,
        timestamp,
        content,
        subject,
      })
    );
    navigate("/supermailDetail");
  };

  return (
    <div className="SuperMailListData">
      {console.log(id)}
      <div className="SuperMailListData__icon__start">
        <IconButton>
          <Checkbox />
        </IconButton>
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
      </div>

      <div
        className="SuperMailListData__Subject"
        onClick={openMail}
        // onClick={() => navigate("/supermailDetail")}
      >
        <Typography
          variant="p"
          sx={{ fontWeight: "medium", m: 1 }}
          component="div"
        >
          {username}
        </Typography>
      </div>

      <div className="SuperMailListData__title" onClick={openMail}>
        <Typography
          sx={{ overflow: "hidden" }}
          sx={{ textOverflow: "ellipsis" }}
          noWrap
          variant="p"
          component="div"
          className={classes.typePrimaryColor}
        >
          {subject} -{content}
        </Typography>
      </div>

      <div className="Time">
        <Typography
          variant="p"
          sx={{ fontWeight: "medium", m: 1 }}
          component="div"
          //   className={classes.typePrimaryColor}
        >
          {/* {new Date(data.timestamp?.seconds * 1000).()} */}
        </Typography>
      </div>
      <div className="final__icon__menu">
        <IconButton>
          <ArchiveIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <DraftsIcon />
        </IconButton>
        <IconButton>
          <WatchLaterIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default SuperMailListData;
