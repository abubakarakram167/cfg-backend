/* jshint indent: 1 */
const model = require('../index');

module.exports = (sequelize, DataTypes) => sequelize.define('content', {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    content_header_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
            model: 'sessions',
            key: 'id',
        },
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    sub_title: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    detail: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    detailJsonMeta: {
        type: DataTypes.JSON,
        allowNull: true,
        field: 'detail_json_meta',
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    end_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('published', 'saved', 'draft', ''),
        allowNull: true,
    },
    type: {
        type: DataTypes.ENUM(
            'reward',
            'tool',
            'session',
            'quiz',
            'event',
            'mini',
            'timeline',
        ),
        allowNull: true,
    },
    total_points: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    featured_image_url: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    event_type: {
        type: DataTypes.ENUM('live-video', 'group-chat', 'zoom-video', ''),
        allowNull: true,
    },
    meta: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    previous_page: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    next_page: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    created_by: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'content',
    timestamps: false,
});
module.exports.initRelations = () => {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    // content belongs to Categories
    const { content, users } = model;

    content.belongsTo(users, {
        foreignKey: 'created_by',
        as: 'author',
    });
    // Content belongs to groups
};
