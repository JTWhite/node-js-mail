


async function postFormDataAsJson({ url, formData }) {
    const formDataJsonString = JSON.stringify(formData);

	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: formDataJsonString,
	};

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}

	return response;
}


async function handleFormSubmit(event) {
	event.preventDefault();

	const form = event.currentTarget;
	const url = form.action;

	try {
        const formInputs = form.querySelectorAll('input, textarea');
        let formData = {};
        form.querySelectorAll('input, textarea').forEach(function (input) {
            formData[input.name] =  input.value;
        });

		const responseData = await postFormDataAsJson({url, formData});
		console.log({ responseData });

        alert('Email Sent');
        form.querySelectorAll('input, textarea').forEach(function (input) {
            input.value =  "";
        });


	} catch (error) {
		console.error(error);
	}
}

const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener('submit', handleFormSubmit)

   
