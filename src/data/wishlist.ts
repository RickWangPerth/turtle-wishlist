export const wishlistEpics = [
  {
    id: "epic-1",
    title: "Turtle Identification & Tag Management",
    focus: "Turtle identity tracking, tag lifecycle management, and recapture accuracy.",
    keyDecisionsNeeded: "Confirm tag status rules, lost identity handling, and PIT/flipper tag data requirements.",
    items: [
      {
        id: "tid-001",
        title: "Lost Identity Turtle Handling",
        epic: "Turtle Identification & Tag Management",
        originalRequest: `(More relevant for non PIT tag species) when an individual has lost all ID (flipper tags) and is observed with scars plus has had new tags applied – how does this turtle get entered without it getting counted as an initial sighting? Presently the only way to enter is as an “untagged” turtle where you can tick boxes for scars present and add the new applied flipper tag, but the database will still count this as an initial sighting rather than a turtle who's lost its ID. Perhaps the untagged turtle plus tag scars combo can trigger the database to count it as a re-sighting/ remigrant?`
      },
      {
        id: "tid-002",
        title: "Tag Status Classification Rules",
        epic: "Turtle Identification & Tag Management",
        originalRequest: `Additionally, “tag status” becomes classified as (T) Tagged turtle - with full Tag history: first tag to last known, when it should really be (R) Re-entered population - Original Tag identity now unknown. What criteria does turtle need to meet for R tag status get selected?`
      },
      {
        id: "tid-003",
        title: "Flipper Tag Status Visibility",
        epic: "Turtle Identification & Tag Management",
        originalRequest: `Tag status next to Flipper tag`
      },
      {
        id: "tid-004",
        title: "Did Not Check Tag Option",
        epic: "Turtle Identification & Tag Management",
        originalRequest: `Checkbox for ‘Did not check tag’`
      },
      {
        id: "tid-005",
        title: "Additional PIT Tag Support",
        epic: "Turtle Identification & Tag Management",
        originalRequest: `Extra spots for adding more than 2 PIT tags`
      },
      {
        id: "tid-006",
        title: "No Tag Scar Option",
        epic: "Turtle Identification & Tag Management",
        originalRequest: `A ‘No tag scar’ checkbox`
      },
      {
        id: "tid-007",
        title: "Dud Tag Registry",
        epic: "Turtle Identification & Tag Management",
        originalRequest: `Dud tag registry feature`
      },
      {
        id: "tid-008",
        title: "Tag Present but Not Read",
        epic: "Turtle Identification & Tag Management",
        originalRequest: `There is no option for “tag present but not read” like in the old database`
      },
      {
        id: "tid-009",
        title: "Unread Tag After Entry",
        epic: "Turtle Identification & Tag Management",
        originalRequest: `No way to enter a tag that was seen but couldn't be read because of barnacles after entering`
      },
      {
        id: "tid-010",
        title: "PIT / Flipper Tag Checked Status by Side",
        epic: "Turtle Identification & Tag Management",
        originalRequest: `Distinguish between did not check/ not there for RHS/LHS PITS - same with flipper tag`
      },
      {
        id: "tid-011",
        title: "DUD Tag Query",
        epic: "Turtle Identification & Tag Management",
        originalRequest: `DUD Tag Query`
      }
    ]
  },
  {
    id: "epic-2",
    title: "Data Entry Experience & Workflow",
    focus: "Improve field data entry speed, reduce repeated input, and make the workflow easier for users.",
    keyDecisionsNeeded: "Confirm which workflow improvements are quick wins and which require form redesign.",
    items: [
      {
        id: "dew-001",
        title: "Remember Entered By User",
        epic: "Data Entry Experience & Workflow",
        originalRequest: `Entered by could get remembered through to the next form to save time`
      },
      {
        id: "dew-002",
        title: "GPS Auto Decimal Point",
        epic: "Data Entry Experience & Workflow",
        originalRequest: `Automatically put dot point in for GPS entering rather than typing it`
      },
      {
        id: "dew-003",
        title: "Default Sticker Box to Yes",
        epic: "Data Entry Experience & Workflow",
        originalRequest: `Default sticker box for yes – 9/10 times there is a sticker, and it saves time rather than ticking each time`
      },
      {
        id: "dew-004",
        title: "Summary Page After Submission",
        epic: "Data Entry Experience & Workflow",
        originalRequest: `Summary page for every entry once saved/submitted?`
      },
      {
        id: "dew-005",
        title: "Simplify Review Box",
        epic: "Data Entry Experience & Workflow",
        originalRequest: `Consider reducing the amount of information displayed in the review box. Feedback about it in the field is that most people look at nothing but the species anyway to save time.`
      },
      {
        id: "dew-006",
        title: "ODK Navigation Improvements",
        epic: "Data Entry Experience & Workflow",
        originalRequest: `ODK: Make the forms easier to travel between`
      },
      {
        id: "dew-007",
        title: "Enter Key Search Support",
        epic: "Data Entry Experience & Workflow",
        originalRequest: `Can the enter button work when searching turtle IDs or tags in the turtle management page`
      },
      {
        id: "dew-008",
        title: "Saved Filled Data Button",
        epic: "Data Entry Experience & Workflow",
        originalRequest: `Saved filled data button is non- functional at the moment`
      }
    ]
  },
  {
    id: "epic-3",
    title: "Validation & Data Quality",
    focus: "Prevent incorrect or incomplete data from entering the database.",
    keyDecisionsNeeded: "Confirm which validations should block submission and which should show warnings only.",
    items: [
      {
        id: "vdq-001",
        title: "Date Outside Season Warning",
        epic: "Validation & Data Quality",
        originalRequest: `Can there be a message alert for when a date is entered outside of the season? Someone accidentally entered an observation as 2015 rather than 2025`
      },
      {
        id: "vdq-002",
        title: "Duplicate Tag Prevention",
        epic: "Validation & Data Quality",
        originalRequest: `Can we create an error message that does not allow you to enter the same tag in both sides`
      },
      {
        id: "vdq-003",
        title: "GPS Point Validation",
        epic: "Validation & Data Quality",
        originalRequest: `In page validation of GPS points e.g., the form can alert when the point is way off target – could it pick up if it’s in the water or only bigger inaccuracies?`
      },
      {
        id: "vdq-004",
        title: "Double Minus Validation",
        epic: "Validation & Data Quality",
        originalRequest: `Double minus gets picked up instead of put through erroneously`
      },
      {
        id: "vdq-005",
        title: "Auto Populate Old Flipper Tag Answer",
        epic: "Validation & Data Quality",
        originalRequest: `Automatically populate YES for “does turtle have old flipper tag after searching for turtle ID with flipper tag`
      },
      {
        id: "vdq-006",
        title: "Problem Turtle Warning",
        epic: "Validation & Data Quality",
        originalRequest: `If case files for problem turtles exist - maybe a error that flags the ID entered to be associated with a problem turtle -`
      }
    ]
  },
  {
    id: "epic-4",
    title: "Data Model & Database Enhancements",
    focus: "Extend backend data structures to support richer turtle, tag, measurement, and QA workflows.",
    keyDecisionsNeeded: "Confirm required schema changes and whether they are needed for data entry, curation, export, or all three.",
    items: [
      {
        id: "dmd-001",
        title: "More Than Two PIT Tags",
        epic: "Data Model & Database Enhancements",
        originalRequest: `Extra columns for more than 2 PIT tags`
      },
      {
        id: "dmd-002",
        title: "PIT Side Column",
        epic: "Data Model & Database Enhancements",
        originalRequest: `Column for PIT side`
      },
      {
        id: "dmd-003",
        title: "Dud Tag Column",
        epic: "Data Model & Database Enhancements",
        originalRequest: `Dud tag column`
      },
      {
        id: "dmd-004",
        title: "Barnacles on Tag Column",
        epic: "Data Model & Database Enhancements",
        originalRequest: `Column for the presence of barnacles on the tag`
      },
      {
        id: "dmd-005",
        title: "Multiple Measurement Support",
        epic: "Data Model & Database Enhancements",
        originalRequest: `Add option for multiple (>4) measurements`
      },
      {
        id: "dmd-006",
        title: "Advanced Query Support",
        epic: "Data Model & Database Enhancements",
        originalRequest: `Explore options for ‘advanced queries’ ie searching for all turtles with 3 PIT’s`
      },
      {
        id: "dmd-007",
        title: "Data Surgery Tools",
        epic: "Data Model & Database Enhancements",
        originalRequest: `Explore options for ‘data surgery’ fixing problem turtles  (unattached tags)`
      }
    ]
  },
  {
    id: "epic-5",
    title: "Reporting, Exports & Analytics",
    focus: "Improve data download reliability, filtered exports, and quick summary reporting.",
    keyDecisionsNeeded: "Confirm export requirements, summary definitions, and which reports are needed for seasonal review.",
    items: [
      {
        id: "rea-001",
        title: "Export Consistency Improvements",
        epic: "Reporting, Exports & Analytics",
        originalRequest: `Export data function is not great and needs work – displaying inconsistent turtle summaries between exports`
      },
      {
        id: "rea-002",
        title: "Filtered Data Downloads",
        epic: "Reporting, Exports & Analytics",
        originalRequest: `Downloads for filtered data`
      },
      {
        id: "rea-003",
        title: "Quick Data Summary Interface",
        epic: "Reporting, Exports & Analytics",
        originalRequest: `Quick data summary interface - # of turtles tagged, new turtles, recaptures etc.`
      },
      {
        id: "rea-004",
        title: "Season Summary Function",
        epic: "Reporting, Exports & Analytics",
        originalRequest: `Data summary function available for quick summary – e.g., total number of flatbacks seen across whole season, nesting vs not-nesting`
      },
      {
        id: "rea-005",
        title: "Download Feature",
        epic: "Reporting, Exports & Analytics",
        originalRequest: `Download Feature`
      },
      {
        id: "rea-006",
        title: "PIT Tag Export Side Distinction",
        epic: "Reporting, Exports & Analytics",
        originalRequest: `Data export distinguishes between L and R pit tags - from memory they were combined in the same column`
      }
    ]
  },
  {
    id: "epic-6",
    title: "Security, Access & Governance",
    focus: "Define safe access models for third parties, volunteers, and external collaborators.",
    keyDecisionsNeeded: "Confirm who needs access, what data they should see, and what actions they should be allowed to perform.",
    items: [
      {
        id: "sag-001",
        title: "Third Party Access Model",
        epic: "Security, Access & Governance",
        originalRequest: `Need to think about how we give access to 3rd parties/volunteers`
      },
      {
        id: "sag-002",
        title: "External Access Requests",
        epic: "Security, Access & Governance",
        originalRequest: `Request from third parties for there to be access per`
      },
      {
        id: "sag-003",
        title: "Access Risk Assessment",
        epic: "Security, Access & Governance",
        originalRequest: `Investigate risks and how much a person can access/how to limit this`
      },
      {
        id: "sag-004",
        title: "New Name Management",
        epic: "Security, Access & Governance",
        originalRequest: `How do we add new names? And do they go into a database? What about double ups – is this an issue?`
      }
    ]
  },
  {
    id: "epic-7",
    title: "User Interface, Forms & General Improvements",
    focus: "Improve wording, layout consistency, terminology, and non-critical usability issues.",
    keyDecisionsNeeded: "Confirm terminology standards and whether the datasheet, data entry form, and curation portal should be aligned.",
    items: [
      {
        id: "uig-001",
        title: "No Damage Checkbox",
        epic: "User Interface, Forms & General Improvements",
        originalRequest: `A ‘No damage’ checkbox for damage`
      },
      {
        id: "uig-002",
        title: "Nesting Question Rewording",
        epic: "User Interface, Forms & General Improvements",
        originalRequest: `Nesting – reword question to ‘Was nesting interrupted by tag team?’`
      },
      {
        id: "uig-003",
        title: "Measurement Terminology Alignment",
        epic: "User Interface, Forms & General Improvements",
        originalRequest: `Change default measurement to CCL min  

Rename CCL nuchal notch to supranuchal notch to ‘CCL min’ 

Rename CCL to CCL max`
      },
      {
        id: "uig-004",
        title: "Rename Bio Samples to Samples",
        epic: "User Interface, Forms & General Improvements",
        originalRequest: `Rename ‘Bio Samples’ to ‘Samples’`
      },
      {
        id: "uig-005",
        title: "Measurement Units",
        epic: "User Interface, Forms & General Improvements",
        originalRequest: `Add units for the other measurement types`
      },
      {
        id: "uig-006",
        title: "Remove Biopsy-Gen Sample Type",
        epic: "User Interface, Forms & General Improvements",
        originalRequest: `Remove ‘Biopsy-Gen’ from sample type drop down`
      },
      {
        id: "uig-007",
        title: "Place and Location Standardisation",
        epic: "User Interface, Forms & General Improvements",
        originalRequest: `Tidy the place/location names – standardise`
      },
      {
        id: "uig-008",
        title: "Form Layout Consistency",
        epic: "User Interface, Forms & General Improvements",
        originalRequest: `In data entry form the R and L flipper tag boxes are on top of each other and for flipper they are next to each other – it would be good to make these homogenous`
      },
      {
        id: "uig-009",
        title: "Datasheet and Database Wording Alignment",
        epic: "User Interface, Forms & General Improvements",
        originalRequest: `Datasheet asks if nesting process interrupted and asks for a cause. On database it says ‘by tagging team’ and doesn’t give a ‘cause’. Inconsistent.`
      },
      {
        id: "uig-010",
        title: "Marked Nests Entry Interface",
        epic: "User Interface, Forms & General Improvements",
        originalRequest: `Marked nests datasheet entry interface`
      }
    ]
  }
];
