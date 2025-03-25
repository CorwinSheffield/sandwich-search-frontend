import Form from 'next/form'


export default function ReviewForm() {

    


    return (
        // TODO: finish restaurant search
        <Form className="grid justify-center bg-blue-500 place-items-center" action="/search">
                <div>
                <label htmlFor= "restaurant">Restaurant: </label>
                <input id="restaurant" className = "bg-white text-black" name="Restaurant Name" placeholder="Restaurant Name" />
                </div>
                <button type="submit">Submit</button>
        
        </Form>


    )

}