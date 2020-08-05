import { BackgroundOptionsEditor } from "./Background/BackgroundOptionsEditor";
import { ParticlesOptionsEditor } from "./Particles/ParticlesOptionsEditor";
import type { Container } from "tsparticles/dist/Core/Container";
import type { IOptions } from "tsparticles/dist/Options/Interfaces/IOptions";
import { InteractivityOptionsEditor } from "./Interactivity/InteractivityOptionsEditor";
import { BackgroundMaskOptionsEditor } from "./BackgroundMask/BackgroundMaskOptionsEditor";
import { InfectionOptionsEditor } from "./Infection/InfectionOptionsEditor";
import { EditorGroup } from "object-gui";

export class OptionsEditor {
    public readonly group: EditorGroup;
    private readonly particles: Container;
    private readonly options: IOptions;

    constructor(private readonly parent: EditorGroup) {
        this.group = parent.addGroup("options", "Options", false);
        this.particles = this.group.data as Container;
        this.options = this.particles.options;

        this.addBackground();
        this.addBackgroundMask();
        this.addInfection();
        this.addInteractivity();
        this.addParticles();

        this.addProperties();
    }

    private addProperties(): void {
        const particles = this.particles;
        const options = particles.options;

        this.group.addProperty(
            "autoPlay",
            "Auto Play",
            options.autoPlay,
            typeof options.autoPlay,
            async (value: string | number | boolean) => {
                if (typeof value === "boolean") {
                    options.autoPlay = value;

                    await particles.refresh();
                }
            }
        );

        this.group.addProperty(
            "detectRetina",
            "Detect Retina",
            options.detectRetina,
            typeof options.detectRetina,
            async (value: string | number | boolean) => {
                if (typeof value === "boolean") {
                    options.detectRetina = value;

                    await particles.refresh();
                }
            }
        );

        this.group.addProperty(
            "fpsLimit",
            "FPS Limit",
            options.fpsLimit,
            typeof options.fpsLimit,
            async (value: string | number | boolean) => {
                if (typeof value === "number") {
                    options.fpsLimit = value;

                    await particles.refresh();
                }
            }
        );

        this.group.addProperty(
            "pauseOnBlur",
            "Pause on Blur",
            options.pauseOnBlur,
            typeof options.pauseOnBlur,
            async (value: string | number | boolean) => {
                if (typeof value === "boolean") {
                    options.pauseOnBlur = value;

                    await particles.refresh();
                }
            }
        );
    }

    private addBackground(): void {
        const options = new BackgroundOptionsEditor(this.group, this.options.background);
    }

    private addBackgroundMask(): void {
        const options = new BackgroundMaskOptionsEditor(this.group, this.options.backgroundMask);
    }

    private addInteractivity(): void {
        const options = new InteractivityOptionsEditor(this.group, this.options.interactivity);
    }

    private addInfection(): void {
        const options = new InfectionOptionsEditor(this.group, this.options.infection);
    }

    private addParticles(): void {
        const options = new ParticlesOptionsEditor(this.group, this.options.particles);
    }
}
