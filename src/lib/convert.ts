export async function createFileFromUrl(url: string, fileName = 'file') {
    try {
        // Fetch the file data
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch the file: ${response.statusText}`);
        }

        // Convert the response into a Blob
        const blob = await response.blob();

        // Create a File object
        const file = new File([blob], fileName, { type: blob.type });

        return file;
    } catch (error) {
        console.error('Error creating file from URL:', error);
        throw error;
    }
}