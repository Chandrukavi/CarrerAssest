import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Card = ({ label, count, bg, link }) => {
    return (
        <Link to={link}>
            <motion.div
                className={`w-full h-36 bg-white p-6 shadow-lg rounded-lg flex items-center justify-between hover:scale-105 transition-transform duration-300 cursor-pointer`}
                whileHover={{ scale: 1.05 }}
            >
                <div className="h-full flex flex-col flex-1 justify-between">
                    <p className="text-lg font-medium text-gray-600">{label}</p>
                    <span className="text-3xl font-bold text-gray-800">{count}</span>
                    <span className="text-sm text-gray-400">{"110 last month"}</span>
                </div>
                <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-semibold ${bg}`}
                >
                    {label.charAt(0)}
                </div>
            </motion.div>
        </Link>
    );
};

Card.propTypes = {
    label: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    bg: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Card;
