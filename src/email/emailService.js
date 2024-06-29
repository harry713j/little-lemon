import environment_variables from "../environment_import/environmentVariables";
import axios from "axios";

async function sendEmail(reservationDetails) {
  const data = {
    service_id: environment_variables.emailjsServiceId,
    template_id: environment_variables.emailjsTemplateId,
    user_id: environment_variables.emailjsUserId,
    template_params: {
      fullName: reservationDetails.fullName,
      to_email: reservationDetails.email,
      reservation_date: reservationDetails.date,
      reservation_time: reservationDetails.time,
      message: `Hello ${reservationDetails.fullName},\n\nYour table reservation for ${reservationDetails.date} at
      time ${reservationDetails.time} is confirmed!\n\nThank you,\nLittle Lemon`,
    },
  };

  try {
    const response = await axios.post(
      environment_variables.emailjsAPIendpoint,
      data
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { sendEmail };
