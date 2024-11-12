import services from "@services";

export const setupApp = async () => {
    await services.init();
};