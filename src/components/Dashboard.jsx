import * as React from 'react';
import { Avatar, Box, Grid, Card, Button } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import "./css/dashboard.css";

export default function Dashboard() {
    return (
        <div style={{ flex: '4', margin: "20px" }}>
            <div style={{ display: "flex", float: 'right' }}>
                <Avatar>
                    <Notifications />
                </Avatar>
                <Avatar>H</Avatar>
            </div>
            <br />
            <h2>Dashboard</h2>
            <Button variant="outlined" color="primary">Upload</Button>
            <br />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {Array.from(Array(8)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card style={{ height: "250px" }}>Dashboard Card</Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}