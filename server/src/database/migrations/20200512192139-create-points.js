module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Points', {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				autoIncrement: false,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			index: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			lat: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			lng: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			routeId: {
				type: Sequelize.UUID,
				references: { model: 'Routes', key: 'id' },
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		})
	},

	down: (queryInterface) => {
		return queryInterface.dropTable('Points')
	},
}
