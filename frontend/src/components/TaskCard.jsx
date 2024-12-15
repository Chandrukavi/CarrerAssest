import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toggleTaskCompleted } from "../store/taskSlice";
import { useState } from "react";
import { motion } from "framer-motion";

const TaskCard = ({
    id,
    title,
    description,
    startDate,
    endDate,
    status,
    priority,
}) => {
    const [complete, setComplete] = useState(false);
    const dispatch = useDispatch();

    const getDate = (dateString) => {
        const dateObject = new Date(dateString);
        return dateObject.toLocaleDateString();
    };

    const startDateFormatted = getDate(startDate);
    const endDateFormatted = getDate(endDate);

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case "completed":
                return "bg-green-100 text-green-800";
            case "in progress":
                return "bg-blue-100 text-blue-800";
            case "pending":
                return "bg-yellow-100 text-yellow-800";
            case "deferred":
                return "bg-gray-100 text-gray-800";
            case "deployed":
                return "bg-purple-100 text-purple-800";
            default:
                return "bg-white";
        }
    };

    const handleToggleCompleted = () => {
        dispatch(toggleTaskCompleted(id));
        setComplete(true);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col rounded-xl justify-center gap-4 bg-white w-80 max-h-[400px] shadow-lg border transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1"
        >
            {/* Status Header */}
            <div
                className={`relative bg-clip-border mt-6 ml-4 mr-4 rounded-lg ${getStatusColor(
                    status
                )} shadow-md h-28`}
            >
                <h1 className="text-right pt-2 pr-3 text-sm font-medium">{priority}</h1>
                <h1 className="font-bold text-center text-lg py-4">{title}</h1>
            </div>

            {/* Description Section */}
            <div className="border-0 p-4 text-center">
                <p className="text-gray-600">{description}</p>
                <div className="flex justify-between mt-4 text-sm font-medium py-2 px-4">
                    <div className="flex flex-col items-center">
                        <p className="text-gray-500">Start Date</p>
                        <p className="text-black">{startDateFormatted}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-500">End Date</p>
                        <p className="text-black">{endDateFormatted}</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="p-4 flex items-center justify-between">
                <p className="font-light text-sm text-gray-500">SNSCE</p>
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        backgroundColor: "#16a34a",
                        color: "#fff",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleToggleCompleted}
                    type="button"
                    className={`px-6 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
                        complete
                            ? "bg-green-100 text-green-800"
                            : `${getStatusColor(status)}`
                    }`}
                >
                    {complete ? "Completed" : status}
                </motion.button>
            </div>
        </motion.div>
    );
};

TaskCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string,
};

export default TaskCard;
