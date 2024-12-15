import Card from './Card.jsx';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const stats = [
        {
            label: "TOTAL TASK",
            total: 50,
            bg: "bg-[#1d4ed8]",
            link: "/allTask",
        },
        {
            label: "COMPLETED TASK",
            total: 25,
            bg: "bg-[#0f766e]",
            link: "/completeTask",
        },
        {
            label: "TASK IN PROGRESS",
            total: 15,
            bg: "bg-[#f59e0b]",
            link: "/inProgressTask",
        },
        {
            label: "PENDING",
            total: 10,
            bg: "bg-[#be185d]",
            link: "/pendingTask",
        },
        {
            label: "DEPLOYED",
            total: 10,
            bg: "bg-[#f59e0b]",
            link: "/deployedTask",
        },
        {
            label: "DEFERRED",
            total: 10,
            bg: "bg-[#0f766e]",
            link: "/deferredTask",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <div className="mx-auto w-full max-w-7xl px-6">
            <motion.div
                className="text-center my-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-gray-500 mt-2">Overview of all tasks and their status</p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {stats.map(({ label, total, bg, link }, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <Card bg={bg} label={label} count={total} link={link} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Dashboard;
