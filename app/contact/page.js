async function submitForm(props){
    'use server';
    const name = props.get('name');
    const email = props.get('email');
    const message = props.get('message');

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    
    // Redirect or show a success message
    return { success: true, message: 'Form submitted successfully!' };
}

export default function Page(){
    return(
        <div>
            <form className="max-w-md mx-auto mt-10" action={submitForm}>
                <h1 className="text-2xl font-bold mb-4 color-black">Contact Me</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer">Send Message</button>
            </form>
        </div>
    );
}