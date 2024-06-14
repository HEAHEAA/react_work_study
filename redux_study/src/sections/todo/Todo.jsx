import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
    Alert,
    Box,
    Button,
    Snackbar,
    TextField,
    Typography,
} from "@mui/material";
import {Edit as EditIcon, Delete as DeleteIcon} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addTodo,
    fetchTodo,
    removeTodo,
    updateTodo,
    changeStateTrue,
    changeStateFalse
} from '../../feature/todo/TodoSlice.jsx';
import UseTransition from "./UseTransition.jsx";
const Todo = () => {
    const dispatch = useDispatch();
    const {todoList, updateState, loading, error, response} = useSelector((state) => state.todo);
    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [writer, setWriter] = useState("");
    const [gender, setGender] = useState(0);
    const [heart, setHeart] = useState(0);

    //list 불러옴
    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);


    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(
            addTodo({
                title: title,
                content: content,
                writer: writer,
                gender: gender,
                heart: 0
            })
        );
        handleClickSnackbar();
        setId(0);
        setTitle("");
        setContent("");
        setWriter("");
        setGender(0);
        setHeart(0);
    }

    //update 할 대상 데이터 불러오기
    const updateItem = (item) => {
        setId(item.id);
        setTitle(item.title);
        setContent(item.content);
        setWriter(item.writer);
        setGender(item.gender);
        setHeart(item.heart);
        dispatch(changeStateTrue());
    };

    const updateForm = () => {
        dispatch(updateTodo({id: id, title: title, content: content, writer: writer, gender: parseInt(gender), heart: heart}));
        dispatch(changeStateFalse());
        setId(0);
        setTitle("");
        setContent("");
        setWriter("");
        setGender(0);
        setHeart(0);
    };

    const deleteTodo = (idx) => {
        console.log(idx);
        dispatch(removeTodo(idx));
        handleClickSnackbar();
    };

    const [open, setOpen] = useState(false);
    const handleClickSnackbar = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 5,
                    color: "white",
                }}
            >
                <Box sx={{width: "55%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center",}}>
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: "8px",}}>
                        <TextField
                            sx={{color: "white"}}
                            variant="outlined"
                            size="small"
                            placeholder="title"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="content"
                            value={content}
                            onChange={(e) => {
                                setContent(e.target.value);
                            }}
                        />
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="writer"
                            value={writer}
                            onChange={(e) => {
                                setWriter(e.target.value);
                            }}
                        />
                        <TextField
                            type={"number"}
                            variant="outlined"
                            size="small"
                            placeholder="gender"
                            value={gender}
                            onChange={(e) => {
                                setGender(e.target.value);
                            }}
                        />
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="heart"
                            value={heart}
                            onChange={(e) => {
                                setHeart(e.target.value);
                            }}
                        />

                        {updateState ? (
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={(e) => {
                                    updateForm(e);
                                }}
                            >
                                Update
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={(e) => {
                                    handleAddTodo(e);
                                }}
                            >
                                Add
                            </Button>
                        )}

                    </Box>
                    <TableContainer component={Paper} sx={{marginTop: "16px"}}>
                        <Table sx={{minWidth: 659}} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{backgroundColor: "black"}}>
                                    <TableCell align="left">
                                        <Typography sx={{fontWeight: 600, color: "white"}}>
                                            No
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography sx={{fontWeight: 600, color: "white"}}>
                                            Title
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography sx={{fontWeight: 600, color: "white"}}>
                                            Content
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography sx={{fontWeight: 600, color: "white"}}>
                                            Writer
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography sx={{fontWeight: 600, color: "white"}}>
                                            Gender
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography sx={{fontWeight: 600, color: "white"}}>
                                            Heart
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography sx={{fontWeight: 600, color: "white"}}>
                                           edit
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {loading ? <TableCell> Loading... </TableCell> : null}
                                {!loading && todoList.length == 0 ? (
                                    <TableCell> No Records </TableCell>
                                ) : null}
                                {!loading && error ? <TableCell> {error} </TableCell> : null}


                                {todoList &&
                                    todoList.map((item, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{
                                                "&:last-child td, &:last-child th": {border: 0},
                                            }}
                                        >
                                            <TableCell align="left">
                                                <Typography> {index + 1} </Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography> {item.title} </Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography> {item.content} </Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography> {item.writer} </Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography> {item.gender === 1 || item.gender === "1" ? "여" : "남"} </Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Typography> {item.heart} </Typography>
                                            </TableCell>
                                            <TableCell align="left">
                                                <Box sx={{display: "flex", cursor: "pointer"}}>
                                                    <Box sx={{color: "black", mr: 1}} onClick={() => updateItem(item)}>
                                                        <EditIcon/>
                                                    </Box>
                                                    <Box sx={{color: "red"}} onClick={() => deleteTodo(item.id)}>
                                                        <DeleteIcon/>
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                <Snackbar
                    open={open}
                    autoHideDuration={5000}
                    onClose={handleClose}
                    anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                >
                    <Alert onClose={handleClose} severity="info" sx={{width: "100%"}}>
                        {response === "add"
                            ? "employee added successfully"
                            : response === "delete"
                                ? "employee delete successfully"
                                : response === "update"
                                    ? "employee update successfully"
                                    : null}
                    </Alert>
                </Snackbar>
            </Box>
            <UseTransition/>
        </div>
    )
}
export default Todo;
