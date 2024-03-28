export const validAuth = (user, schema) => {
    const { error } = schema.validate(user, { abortEarly: false });
    if (error) {
        const errors = error.details.map(err => err.message)
        return res.status(400).json({ message: errors })

    }
}