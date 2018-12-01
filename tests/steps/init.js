let initialized = false

process.env.order_events_stream = 'orders-dev-cha'
process.env.restaurant_notification_topic = 'restaurants-dev-cha'

const init = async () => {
    if (initialized) {
        return
    }

    process.env.restaurants_api   = "https://b282j7d7ri.execute-api.eu-central-1.amazonaws.com/dev/restaurants"
    process.env.TEST_ROOT         = "https://b282j7d7ri.execute-api.eu-central-1.amazonaws.com/dev"
    process.env.restaurants_table = "restaurants-dev-cha"
    process.env.AWS_REGION        = "eu-central-1"

    initialized = true
}

module.exports = {
    init
}