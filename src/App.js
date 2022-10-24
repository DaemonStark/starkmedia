import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'; 

import { Feed, ChannelDetail, Navbar, SearchFeed, VideoDetail } from './components';

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor : '#000'}}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Feed />}/>
                <Route path="/video/:id" element={<VideoDetail />}/>
                <Route path="/channel/:id" element={<ChannelDetail />}/>
                <Route path="/search/:searchQuery" element={<SearchFeed />}/>
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App