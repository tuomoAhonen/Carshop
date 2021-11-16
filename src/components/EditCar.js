import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function EditCar(props) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        year: '',
        price: '',
    });

    const inputChanged = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    };

    const handleClickOpen = () => {
        console.log(props.car);
        setCar({
            brand: props.car.brand,
            model: props.car.model,
            color: props.car.color,
            fuel: props.car.fuel,
            year: props.car.year,
            price: props.car.price,
        });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        props.editCar(car, props.car._links.self.href);
        handleClose();
    }

    return (
        <div>
        <Button onClick={handleClickOpen}>
            Edit
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit car</DialogTitle>
            <DialogContent>
            <TextField
                name="brand"
                value={car.brand}
                onChange={inputChanged}
                margin="dense"
                label="Brand"
                fullWidth
                variant="standard"
            />
            <TextField
                name="model"
                value={car.model}
                onChange={inputChanged}
                margin="dense"
                label="Model"
                fullWidth
                variant="standard"
            />
            <TextField
                name="color"
                value={car.color}
                onChange={inputChanged}
                margin="dense"
                label="Color"
                fullWidth
                variant="standard"
            />
            <TextField
                name="fuel"
                value={car.fuel}
                onChange={inputChanged}
                margin="dense"
                label="Fuel"
                fullWidth
                variant="standard"
            />
            <TextField
                name="year"
                value={car.year}
                onChange={inputChanged}
                margin="dense"
                label="Year"
                fullWidth
                variant="standard"
            />
            <TextField
                name="price"
                value={car.price}
                onChange={inputChanged}
                margin="dense"
                label="Price"
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default EditCar;