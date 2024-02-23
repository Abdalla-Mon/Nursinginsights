"use client"
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {FilterContext} from "@/sharedComponents/filter/Filter";
import {useContext} from "react";
import {useRouter} from "next/navigation";
import modifyParams from "@/lib/fetch_data/modifySearchParams";

const options = [
      9,12,15,18
      ]
export default function ItemsPerPage() {
    const { length } = useContext(FilterContext);

    return(
        <div className={"flex items-center gap-2 font-bold"}>
            <p>Showing</p>
            <DropDown   />
            <p className={"flex gap-1"}>course of <span className={"highlighted"}>{length}</span> courses</p>
        </div>
    )
}
  function DropDown() {
    const { searchParams } = useContext(FilterContext);
    const router = useRouter();
    function handleChange(event) {
        const search = modifyParams(searchParams, event.target.value, "limit");
        router.push(search);
    }
return(
      <FormControl
            variant="standard"
            sx={{
                "& .MuiSelect-icon": {
                    color: "var(--color_primary)",
                },
            }}
      >
          {/*<InputLabel*/}
          {/*      sx={{*/}
          {/*          // color: props.borderColor + "!important",*/}
          {/*      }}*/}
          {/*>*/}
          {/*    {props.label}*/}
          {/*</InputLabel>*/}
          <Select
                id="select-filled"
                value={searchParams.limit || 12}
                onChange={handleChange}
                sx={{
                    "& .MuiInputBase-input": {
                        fontWeight:"bold !important",
                        color: "var(--color_primary)",
                    },
                    "&:after": {
                        borderColor: 'var(--color_primary) ' + "!important",
                    },
                }}
                inputProps={{
                    MenuProps: {
                        PaperProps: {
                            sx: {
                                backgroundColor: "var(--color_primary)",

                            },
                        },
                        MenuListProps: {
                            sx: {
                                color: "white",
                                "& .MuiMenuItem-root.Mui-selected": {
                                    // backgroundColor: "white ",
                                },
                            },
                        },
                    },
                }}
          >
              {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
              ))}
          </Select>
      </FormControl>
)
}