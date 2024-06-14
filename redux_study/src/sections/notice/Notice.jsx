import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addNotice, fetchNotice} from "../../feature/notice/noticeSlice.jsx";
import Grid from '@mui/material/Grid';
import {Button, TextField} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TableCell from "@mui/material/TableCell";

const Notice = () => {
    const dispatch = useDispatch();
    const {noticeList, isSuccess, isLoading, updateState, error} = useSelector((state) => state.notice)


    const [dataValue, setDataValue] = useState({
        notice_type: "",
        notice_content: "",
        start_week: "202424"
    })


    const handleAddNotice = (e) => {
        e.preventDefault();
        dispatch(
            addNotice({
                notice_type: dataValue.notice_type,
                notice_content: dataValue.notice_content,
                start_week: "202424"
            })
        );
        setDataValue({
            notice_type: "",
            notice_content: "",
            start_week: "202424"
        });
        window.location.reload();
    }


    useEffect(() => {
        dispatch(fetchNotice());
    }, [dispatch]);


    return (
        <div>

            <div className="column">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        제목 :
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">선택</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                defaultValue=""
                                value={dataValue.notice_type}
                                onChange={(e) => setDataValue({...dataValue, notice_type: e.target.value})}
                            >
                                <MenuItem value={"1"}>공지사항</MenuItem>
                                <MenuItem value={"2"}>알림</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        공지내용 :
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={dataValue.notice_content}
                            onChange={(e) => setDataValue({...dataValue, notice_content: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        제목 :
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={dataValue.start_week}
                            onChange={(e) => setDataValue({...dataValue, start_week: e.target.value})}
                        />
                    </Grid>
                </Grid>

                <br/>
                <Button fullWidth variant="contained" onClick={(e) => {
                    handleAddNotice(e)
                }}>
                    전송
                </Button>
            </div>


            <div className="column">
                {isLoading ? <TableCell> Loading... </TableCell> : null}
                {!isLoading && noticeList.length == 0 ? (
                    <TableCell> No Records </TableCell>
                ) : null}
                {!isLoading && error ? <TableCell> {error} </TableCell> : null}

                {Array.isArray(noticeList) ? noticeList.map((notice,index) => (
                        <ul key={index}>
                            <li>{notice.notice_idx}</li>
                            <li>{notice.notice_content}</li>
                            <li>{notice.notice_type === "1" ? "공지사항" : "알림"}</li>
                        </ul>
                    )) : null
                }
            </div>

        </div>
    )
}
export default Notice;
