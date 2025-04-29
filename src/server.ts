import app from './app';

const PORT = process.env.PORT || 8501;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})