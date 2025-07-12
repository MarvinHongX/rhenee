const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Server Error');
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('An error occurred while fetching the data.', error);
        return { error: 'There was a problem fetching the data.' };
    }
};
  
export default fetchData;