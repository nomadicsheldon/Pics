import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID KeVphLtgDTLtJ_ONJPaoq8jpOSNX6MwYuNxeRKnCnmc",
	},
});
