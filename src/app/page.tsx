import { SettingsTabs } from '@/components/SettingsTabs'
import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/textarea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col lg:items-center justify-between border-b border-zinc-200 pb-5 lg:flex-row gap-4 dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="lg:grid lg:grid-cols-form gap-3 flex flex-col">
            <label
              htmlFor="firstName"
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700"
            >
              Name
            </label>
            <div className="lg:grid gap-6 lg:grid-cols-2 flex flex-col">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Débora" />
              </InputRoot>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium dark:text-zinc-300 text-zinc-700 lg:sr-only"
                >
                  Last Name
                </label>
                <InputRoot>
                  <InputControl defaultValue="Rodrigues" />
                </InputRoot>
              </div>
            </div>
          </div>
          <div className="lg:grid gap-3 flex flex-col lg:grid-cols-form pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700"
            >
              Email addres
            </label>

            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue="deborarsousa@gmail.com"
              />
            </InputRoot>
          </div>
          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700"
            >
              Your photo
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label
              htmlFor="role"
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700"
            >
              Role
            </label>

            <InputRoot>
              <InputControl id="role" defaultValue="Dev" />
            </InputRoot>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700"
            >
              Country
            </label>

            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="use" text="United States" />
            </Select>
          </div>
          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700"
            >
              Timezone
            </label>

            <Select placeholder="Select a timezone...">
              <SelectItem value="pc" text="Pacific Standard Time (PST)" />
              <SelectItem value="use" text="United States" />
            </Select>
          </div>
          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label
              htmlFor="bio"
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700"
            >
              Bio
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 ">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    text="Normal Text"
                    defaultChecked
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>
          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium dark:text-zinc-300 text-zinc-700"
            >
              Portfolio projects
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
