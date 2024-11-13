import * as Yup from "yup";
import { useFormik } from "formik";
import { useSignUpMutation } from "@/store/api.config";
import { useCallback } from "react";
import { SignUpRequest } from "@/models/request";
import useToast from "./useToast"; // Custom hook for showing toast notifications
import { useAppDispatch } from "@/store/hooks"; // Hook to access the Redux dispatch function
import { updateUserInfo } from "@/store/slice/auth.slice"; // Redux action to update user info
import { router } from "expo-router"; // Router instance to navigate between screens

// Custom hook to manage the signUp logic and form handling
const useSignUp = () => {
  const dispatch = useAppDispatch(); // Get Redux dispatch for dispatching actions
  const { showToast } = useToast(); // Get the showToast function from the toast hook

  // Validation schema using Yup to enforce input validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address") // Validates email format
      .required("Email is required"), // Ensures email field is filled
    password: Yup.string().required("Password is required"), // Ensures password field is filled
  });

  // Define the signUp mutation hook and response state
  const [signUp, response] = useSignUpMutation();

  /**
   * Callback to handle signUp functionality
   * @param {SignUpRequest} request - The signUp request object containing email and password
   */
  const onSignUp = useCallback(
    async (request: SignUpRequest) => {
      try {
        const response: any = await signUp(request); // Call signUp API with the provided request
        const apiResponse = response.error?.data || response.data; // Extract data or error from response

        if (apiResponse.error_code) {
          // Show error toast if the API response contains an error code
          showToast("error", "Error occurred", apiResponse?.msg);
        } else {
          // Show success toast and update Redux store if signUp is successful
          showToast("success", "Success", "Signup successful");
        //   dispatch(updateUserInfo(apiResponse)); // Update user information in the Redux store
          router.navigate("/"); // Navigate to the main screen upon successful signUp
        }
      } catch (error: any) {
        // Show generic error toast if an error occurs during signUp
        showToast("error", "Error", error.message || "An unknown error occurred");
      }
    },
    [showToast, dispatch]
  );

  // Initialize and configure form handling with Formik
  const {
    handleChange,      // Handles change events for form fields
    handleSubmit,      // Handles form submission
    setFieldTouched,   // Marks form fields as touched
    errors,            // Contains validation errors
    values,            // Contains current form values
    touched,           // Tracks if fields have been interacted with
  } = useFormik({
    validationSchema,             // Attach validation schema for validation on form submit
    onSubmit: onSignUp,            // Call onSignUp when form is submitted
    initialValues: { email: "", password: "" }, // Initial form field values
  });

  // Return form handlers and state for use in the component
  return {
    handleSubmit,        // For handling form submission
    setFieldTouched,     // For handling field "touched" state
    handleChange,        // For handling input changes
    loading: response.isLoading, // Loading state during API call
    errors,              // Form validation errors
    values,              // Current form values
    touched,             // Touched fields
  };
};

export default useSignUp;
