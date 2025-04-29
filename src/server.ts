import app from './app';

const PORT = process.env.PORT || 8502;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})